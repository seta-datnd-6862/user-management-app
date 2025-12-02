const UserDetails = ({ user }) => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
      <div>
        <h4 className="font-semibold text-gray-700 mb-1">Địa chỉ:</h4>
        <p className="text-gray-600 text-sm">
          {user.address.street}, {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-700 mb-1">Website:</h4>
        
        <a  href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline text-sm"
        >
          {user.website}
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
