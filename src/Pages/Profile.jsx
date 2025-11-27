import React, { useContext, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile, updateEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, setUser } = useContext(AuthContext);

    const [open, setOpen] = useState(false);
    const [name, setName] = useState(user?.displayName || "");
    const [email, setEmail] = useState(user?.email || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");

    const handleUpdate = async (e) => {
        e.preventDefault();

        let updated = false;

        if (name !== user.displayName || photo !== user.photoURL) {
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
            updated = true;
        }

        if (email !== user.email) {
            await updateEmail(user, email);
            updated = true;
        }

        if (updated) {
            setUser({
                ...user,
                displayName: name,
                email: email,
                photoURL: photo,
            });

            toast.success("Profile Updated Successfully");
        } else {
            toast.info("No changes to update");
        }

        setOpen(false);
    };

    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                <div className="p-5 text-center min-h-screen">

                    <img className="w-32 h-32 rounded-full mx-auto" src={user?.photoURL} alt="profile" />

                    <h2 className="text-2xl font-bold mt-3">{user?.displayName}</h2>

                    <p className="text-gray-600">{user?.email}</p>

                    <div className="flex justify-center mt-5">
                        <button 
                            onClick={() => setOpen(true)}
                            className="px-3 py-2 bg-purple-500 rounded-2xl text-white"
                        >
                            Update Profile
                        </button>
                    </div>

               
                    {open && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-5 rounded-lg w-80">

                                <h3 className="text-xl font-bold mb-3">Update Profile</h3>

                                <form onSubmit={handleUpdate} className="space-y-3">

                                    <input
                                        className="input input-bordered w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Name"
                                    />

                                    <input
                                        className="input input-bordered w-full"
                                        value={photo}
                                        onChange={(e) => setPhoto(e.target.value)}
                                        placeholder="Photo URL"
                                    />

                                    <button className="btn btn-primary w-full" type="submit">
                                        Save Changes
                                    </button>

                                    <button 
                                        className="btn btn-error w-full"
                                        onClick={() => setOpen(false)}
                                        type="button"
                                    >
                                        Cancel
                                    </button>

                                </form>

                            </div>
                        </div>
                    )}

                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Profile;
