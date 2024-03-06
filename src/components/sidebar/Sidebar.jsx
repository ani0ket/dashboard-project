import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">InnovateHub</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <Link to="/DesignTeam" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Design Team</span>
            </li>
          </Link>

          <Link to="/MarktingTeam" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Marketing Team</span>
            </li>
          </Link>
          <Link to="/DevelopmentTeam" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Development Team</span>
            </li>
          </Link>
          <p className="title">FOLDERS</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span> {/* Make it sliding */}
            </li>
          </Link>
          <Link to="/Sales" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Sales</span>
            </li>
          </Link>
          <Link to="/Design" style={{ textDecoration: "none" }}>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Design</span>
            </li>
          </Link>
          <Link to="/Office" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Office</span>
            </li>
          </Link>
          <Link to="/Legals" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Legals</span>
            </li>
          </Link>
          <Link to="/InviteTeammates" style={{ textDecoration: "none" }}>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Invite teammates</span>
            </li>
          </Link>
        </ul>
        <ul>
          <Link to="/Help" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Help and first steps</span>
            </li>
          </Link>
          <li>
            <PersonOutlineIcon className="icon" />
            <span>days left on trial</span> {/* How to add count meter */}
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
