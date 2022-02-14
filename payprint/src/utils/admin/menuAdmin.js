import Settings from '../../components/admin/dashboard/Settings'
import Billing from '../../pages/admin/Billing'
import Dashboard from '../../pages/admin/Dashboard'
import MyProfile from '../../pages/admin/MyProfile'
import MyReceiver from '../../pages/admin/MyReceiver'
import SendMoney from '../../pages/admin/SendMoney'

const menuAdmin = [
  {
    name: 'Dashboard',
    title: 'Dashboard',
    iconTitle: () => <i className="mdi mdi-24px mdi-view-dashboard"></i>,
    icon: () => <i className="mdi mdi-24px mdi-view-dashboard"></i>,
    path: '/admin/dashboard',
    content: Dashboard
  },
  {
    name: 'Send Money',
    title: 'Send Money',
    iconTitle: () => <i className="fas fa-paper-plane"></i>,
    icon: () => <i className="fas fa-paper-plane"></i>,
    path: '/admin/send-money',
    content: SendMoney
  },
  {
    name: 'Transaction',
    title: 'Transaction',
    iconTitle: () => <i className="mdi mdi-24px mdi-format-list-bulleted"></i>,
    icon: () => <i className="mdi mdi-24px mdi-format-list-bulleted"></i>,
    path: '/admin/transaction',
    content: () => <h3>Transaction</h3>
  },
  {
    name: 'My Receiver',
    title: 'My Receivers',
    iconTitle: () => <i className="fas fa-paper-plane"></i>,
    icon: ({fill}) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path
            d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
            fill={fill} />
          <path
            d="M13.5 18C13.5 18 12 18 12 16.5C12 15 13.5 10.5 21 10.5C28.5 10.5 30 15 30 16.5C30 18 28.5 18 28.5 18H13.5ZM21 9C22.1935 9 23.3381 8.52589 24.182 7.68198C25.0259 6.83807 25.5 5.69347 25.5 4.5C25.5 3.30653 25.0259 2.16193 24.182 1.31802C23.3381 0.474106 22.1935 0 21 0C19.8065 0 18.6619 0.474106 17.818 1.31802C16.9741 2.16193 16.5 3.30653 16.5 4.5C16.5 5.69347 16.9741 6.83807 17.818 7.68198C18.6619 8.52589 19.8065 9 21 9Z"
            fill={fill} />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    path: '/admin/my-receiver',
    content: MyReceiver
  },
  {
    name: 'Billing',
    title: 'Payment Method',
    iconTitle: () => <i className="fas fa-credit-card"></i>,
    icon: () => <i className="fas fa-plus"></i>,
    path: '/admin/billing',
    content: Billing,
  },
  {
    name: 'My Profile',
    title: 'My Profile',
    iconTitle: () => <i className="mdi mdi-24px mdi-account"></i>,
    icon: () => <i className="mdi mdi-24px mdi-account"></i>,
    path: '/admin/my-profile',
    content: MyProfile
  },
  {
    name: 'Setting',
    title: 'Setting',
    iconTitle: () => <i className="mdi mdi-24px mdi-cog"></i>,
    icon: () => <i className="mdi mdi-24px mdi-cog"></i>,
    path: '/admin/setting',
    content: Settings
  },
]

export default menuAdmin
