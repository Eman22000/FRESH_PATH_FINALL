import React, { useState, useRef } from 'react';
import pic from '../assets/logo_.png'
import './profile.css';
const saveToBackend = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Saved to backend:', data);
    return { success: true };
};

const EnhancedProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Menna Hassan',
        email: 'menna@gmail.com',
        address: '1street',
        phone: '0123456789',
        width: '65',
        height: '163'
    });
    const [profilePicture, setProfilePicture] = useState(pic);
    const fileInputRef = useRef(null);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleSaveClick = async () => {
        setIsSaving(true);
        try {
            const result = await saveToBackend({ ...profile, profilePicture });
            if (result.success) {
                setIsEditing(false);
                alert('Profile saved successfully!');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('Failed to save profile. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container-pro">
            <div className="profileCard">
                <div className="imageContainer" onClick={handleImageClick}>
                    <img
                        src={profilePicture}
                        alt="Profile Picture"
                        className="profilePicture"
                    />
                    {isEditing && <div className="imageOverlay">Change Photo</div>}
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="fileInput"
                    accept="image/*"
                />
                <h1 className="name">{profile.name}</h1>
                <form className="form">
                    <div className="formGroup">
                        <h3 className='label'>Name:</h3>
                        {isEditing ? (
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.name}</p>
                        )}

                        <h3 className='label'>Email:</h3>
                        {isEditing ? (
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.email}</p>
                        )}

                        <h3 className="label">Address:</h3>
                        {isEditing ? (
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={profile.address}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.address}</p>
                        )}

                        <h3 className="label">Phone:</h3>
                        {isEditing ? (
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={profile.phone}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.phone}</p>
                        )}
                        <h3 className="label">Width:</h3>
                        {isEditing ? (
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={profile.width}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.width} KG </p>
                        )}
                        <h3 className="label">Height:</h3>
                        {isEditing ? (
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={profile.height}
                                onChange={handleInputChange}
                                className="input"
                            />
                        ) : (
                            <p>{profile.height} CM </p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={isEditing ? handleSaveClick : handleEditClick}
                        disabled={isSaving}
                    >
                        {isEditing ? (isSaving ? 'Saving...' : 'Save') : 'Edit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnhancedProfilePage;
