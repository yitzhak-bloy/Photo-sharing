import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModel from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState();

  const {isLoading, error, sendRequset, clearError} = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequset(
          'http://localhost:5000/api/users'
        );
        
        setLoadedUsers(responseData.users);
      } catch(err) {}
    };
    fetchUsers()
  }, [sendRequset])

  return (
    <React.Fragment >
    <ErrorModel error={error} onClear={clearError} />
    {isLoading && (
      <div className="center" >
        <LoadingSpinner />
      </div>
    )}
    {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}

    </React.Fragment>
  )

};

export default Users;
