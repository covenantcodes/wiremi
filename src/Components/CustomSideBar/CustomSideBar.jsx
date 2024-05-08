import "./CustomSideBar.css"
import Badge from "../Badge";
import {
  Sidebar,
  Menu,
  MenuItem,
  // useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import InsertChartRoundedIcon from "@mui/icons-material/InsertChartRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import TextSnippetRoundedIcon from "@mui/icons-material/TextSnippetRounded";
import ComputerRoundedIcon from "@mui/icons-material/ComputerRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

const CustomSideBar = () => {
  // const { collapseSidebar, isCollapsed } = useProSidebar();
  // const [sidebarCollapsed, setSidebarCollapsed] = useState(isCollapsed);

  // const handleToggleSidebar = () => {
  //   if (sidebarCollapsed) {
  //     collapseSidebar();
  //   } else {
  //     collapseSidebar();
  //   }
  //   setSidebarCollapsed(!sidebarCollapsed);
  // };
  return (
    <div id="app" className="sidebar_container">
      <Sidebar className="main_sidebar">
        <Menu
          menuItemStyles={{
            root: {
              paddingTop: ".6rem",
            },
            icon: {
              color: "var(--global-icon)",
            },
            label: () => ({
              fontWeight: 350,
              fontFamily: "var(--main-font)",
              fontSize: "19px",
            }),

            button: {
              "&:hover": {
                backgroundColor: "#0339A4",
                color: "#ffffff",
              },
            },

            subMenuContent: {
              backgroundColor: "var(--global-sidebar)",
            },
          }}
        >
          <div
            className="siderbar_section_title"
            style={{
              padding: "1.5rem",
              textAlign: "left",
              color: "var(--global-icon)",
              fontFamily: "var(--main-font)",
            }}
          >
            {" "}
            <div>Main</div>
          </div>
          <SubMenu
            label="Dashboard"
            icon={<HomeRoundedIcon />}
            suffix={
              <Badge variant="info" shape="square">
                6
              </Badge>
            }
          >
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <MenuItem icon={<PersonRoundedIcon />}> Customers Area </MenuItem>
          <MenuItem icon={<SupportAgentRoundedIcon />}>
            Customer Support
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "33%",
                justifyContent: "center",
              }}
            />
          </MenuItem>
          <MenuItem icon={<ManageAccountsRoundedIcon />}>
            Account Manager
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "40%",
              }}
            />
          </MenuItem>
          <MenuItem icon={<CampaignRoundedIcon />}>
            Marketing Department
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "15%",
              }}
            />
          </MenuItem>
          <MenuItem icon={<InsertChartRoundedIcon />}>
            Finance Department
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "25%",
              }}
            />
          </MenuItem>
          <MenuItem icon={<DiamondRoundedIcon />}>
            Assets Management
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "25%",
              }}
            />
          </MenuItem>
          <MenuItem icon={<TextSnippetRoundedIcon />}>
            Compliance{" "}
            <LockRoundedIcon
              style={{
                position: "absolute",
                width: "68%",
              }}
            />
          </MenuItem>
          <MenuItem icon={<ComputerRoundedIcon />}>IT Department</MenuItem>
          <MenuItem icon={<EmailRoundedIcon />}>Email</MenuItem>
          <MenuItem icon={<SettingsRoundedIcon />}>Settings</MenuItem>
          <MenuItem icon={<LogoutRoundedIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default CustomSideBar;
