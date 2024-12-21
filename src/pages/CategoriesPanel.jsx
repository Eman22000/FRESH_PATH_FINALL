import React, { useState } from 'react';

export function CategoriesPanel({Diets , ed}) {
  const [newCategory, setNewCategory] = useState({ id: 0, name: '', img: '', description: '' });
  const [editingCategory, setEditingCategory] = useState(null);

  const addCategory = () => {
    if (newCategory.name && newCategory.img) {
      ed([...Diets, { ...newCategory, id: Date.now() }]);
      setNewCategory({ id: 0, name: '', image: '', description: '' });
    }
  };

  const removeCategory = (id) => {
    ed(Diets.filter(category => category.id !== id));
  };

  const updateCategory = (updatedCategory) => {
    ed(Diets.map(category => 
      category.id === updatedCategory.id ? updatedCategory : category
    ));
    setEditingCategory(null);
  };

  return (
    <div className="categories-panel">
      <div className="add-category-form">
        <h2>Add New Category</h2>
        <input 
          type="text" 
          value={newCategory.name} 
          onChange={(e) => setNewCategory({...newCategory, name: e.target.value})} 
          placeholder="Category name" 
        />
        <input 
          type="text" 
          value={newCategory.img} 
          onChange={(e) => setNewCategory({...newCategory, img: e.target.value})} 
          placeholder="Image URL" 
        />
        <textarea 
          value={newCategory.description} 
          onChange={(e) => setNewCategory({...newCategory, description: e.target.value})} 
          placeholder="Category description" 
        />
        <button onClick={addCategory}>Add Category</button>
      </div>

      <div className="manage-categories">
        <h2>Manage Categories</h2>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>Image</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Diets.map(category => (
              <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                  <img src={category.img} alt={category.name} />
                </td>
                <td>{category.description}</td>
                <td>
                  <button onClick={() => setEditingCategory(category)}>Edit</button>
                  <button onClick={() => removeCategory(category.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingCategory && (
        <div className="edit-category-modal">
          <div className="modal-content">
            <h2>Edit Category</h2>
            <input
              type="text"
              value={editingCategory.name}
              onChange={(e) => setEditingCategory({...editingCategory, name: e.target.value})}
              placeholder="Category name"
            />
            <input
              type="text"
              value={editingCategory.img}
              onChange={(e) => setEditingCategory({...editingCategory, img: e.target.value})}
              placeholder="Image URL"
            />
            <textarea
              value={editingCategory.description}
              onChange={(e) => setEditingCategory({...editingCategory, description: e.target.value})}
              placeholder="Category description"
            />
            <button onClick={() => updateCategory(editingCategory)}>Save Changes</button>
            <button onClick={() => setEditingCategory(null)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
