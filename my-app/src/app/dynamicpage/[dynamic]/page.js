import getusers from '../../../../services/users';
const page = async (props) => {
      const getUserList = getusers();
      const users = await getUserList;
      const userId = props.params.dynamic - 1
      const user = users[`${userId}`]
      console.log(user);
      return (
            <div>
                  <h2>
                        {
                              <div className='flex-col'>
                                    <p>{user.name}</p>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                    <p>{user.address.street}</p>
                              </div>
                        }
                  </h2>
            </div>
      )
}

export default page