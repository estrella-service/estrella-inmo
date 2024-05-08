import { useEffect } from 'react';
import { useUser } from '../context/user-context';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavAdmin from '../components/admin/NavAdmin';
import SideNavDashboard from '../components/admin/SideNavDashboard';

const AdminPanelPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/');
    }
  }, [user]);
  return (
    <>
      <div className='flex  '>
        <div
          style={{
            position: 'fixed ',
            height: '100vh',
            backgroundColor: 'rgb(243 244 246)',
          }}>
          <SideNavDashboard />
        </div>
        <main className='flex items-start w-full justify-center overflow-auto ml-[50px] md:ml-[80px]'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminPanelPage;
