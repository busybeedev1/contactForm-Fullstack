import "./AllUserData.css";
import { useEffect, useState } from "react";

// Helper: Get initials
const getInitials = (firstName = "", lastName = "") =>
    `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

// Single User Card Component
const UserCard = ({ info }) => (
    <div className="userCard">

        {/* Header */}
        <div className="userCard__header">

            <div className="userCard__avatar">
                {getInitials(info.firstName, info.lastName)}
                <span className="userCard__status"></span>
            </div>

            <div className="userCard__headerText">

                <div className="userCard__fullName">

                    <span className="userCard__firstName">
                        {info.firstName}
                    </span>

                    <span className="userCard__lastName">
                        {info.lastName}
                    </span>

                </div>

            </div>

        </div>

        {/* Body */}
        <div className="userCard__body">

            <div className="userCard__field">

                <div className="userCard__fieldIcon">
                    ✉
                </div>

                <div className="userCard__fieldContent">

                    <div className="userCard__fieldLabel">
                        Email
                    </div>

                    <div
                        className="userCard__email"
                        title={info.email}
                    >
                        {info.email}
                    </div>

                </div>

            </div>

            <div className="userCard__field">

                <div className="userCard__fieldIcon">
                    #
                </div>

                <div className="userCard__fieldContent">

                    <div className="userCard__fieldLabel">
                        Username
                    </div>

                    <span className="userCard__username">
                        {info.username}
                    </span>

                </div>

            </div>

        </div>

        {/* Footer */}
        <div className="userCard__footer">

            <button className="btn btn--primary">
                View Profile
            </button>

            <button className="btn btn--ghost">
                Message
            </button>

            <button
                className="btn btn--icon"
                title="More options"
            >
                ⋯
            </button>

        </div>

    </div>
);

// Main Page Component
const AllUSerData = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        const fetchUserData = async () => {

            try {

                const response = await fetch(
                    "http://localhost:5231/api/v1/getUser"
                );

                const data = await response.json();

                if (Array.isArray(data)) {

                    setUserData(data);

                } else if (data && Array.isArray(data.alldata)) {

                    setUserData(data.alldata);

                } else if (data && Array.isArray(data.users)) {

                    setUserData(data.users);

                } else if (data && Array.isArray(data.data)) {

                    setUserData(data.data);

                } else {

                    console.warn(
                        "Unexpected API response shape:",
                        data
                    );

                    setUserData([]);

                }

            } catch (error) {

                console.log(error.message);
                setUserData([]);

            }

        };

        fetchUserData();

    }, []);

    return (

        <div className="pageWrapper">

            {/* Page Header */}
            <header className="pageHeader">

                <div className="pageHeader__eyebrow">
                    System Users
                </div>

                <h1 className="pageHeader__title">
                    User <span>Directory</span>
                </h1>

                <p className="pageHeader__subtitle">

                    MongoDB collection — users

                    {userData.length > 0 && (
                        <span className="pageHeader__count">
                            {userData.length} records
                        </span>
                    )}

                </p>

            </header>

            {/* Cards Grid */}
            <div className="userContainer">

                {userData.length > 0 ? (

                    userData.map((info) => (
                        <UserCard
                            key={info._id}
                            info={info}
                        />
                    ))

                ) : (

                    <div className="emptyState">

                        <div className="emptyState__icon">
                            ○
                        </div>

                        <p className="emptyState__text">
                            No users found
                        </p>

                        <p className="emptyState__subtext">
                            The collection is empty or failed to load
                        </p>

                    </div>

                )}

            </div>

        </div>

    );
};

export default AllUSerData;