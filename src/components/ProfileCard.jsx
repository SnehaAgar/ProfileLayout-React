import Skills from "./Skills";
const ProfileCard = () => {
    const profile = {
        name: "Sneha Agarwal",
        role: "Java Backend developer",
        bio: "A passionate, kind, hardworking Java engineer",
        skills: ["Java", "CSS", "JS", "React", "ML"],
        email: "snehaagarwal@gmail.com",
        location: "Siliguri, India",
        image: "https://i.pravatar.cc/150?img=12"
    };

    return (
        <div className="profile-card">
            <img src={profile.image} alt="Profile" className="profile-image" />
            <h2>{profile.name}</h2>
            <p className="role">{profile.role}</p>
            <p className="bio">{profile.bio}</p>
            <Skills skills={profile.skills} />
            <div className="contact">
                <p>{profile.email}</p>
                <p>{profile.location}</p>
            </div>
        </div>
    );
};
export default ProfileCard;
