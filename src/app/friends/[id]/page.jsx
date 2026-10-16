import React from 'react';

const FriendDetails = async({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            this is frinds details plage : {id}
        </div>
    );
};

export default FriendDetails;