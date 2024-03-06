import { Avatar, AvatarGroup, Chip } from "@mui/material";

export const userColumns = [
  {
    field: "brand",
    headerName: "Brand",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg brand-user"
            src={params.row.img}
            alt="avatar"
          />
          {params.row.brand}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  //todo: resize +2 icon
  {
    field: "members",
    headerName: "Members",
    width: 100,
    renderCell: (params) => {
      return (
        <AvatarGroup max={4} sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src={params.row.img}
            className="cellImg"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Avatar
            alt="Travis Howard"
            src={params.row.img}
            className="cellImg"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Avatar
            alt="Cindy Baker"
            src={params.row.img}
            className="cellImg"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Avatar
            alt="Agnes Walker"
            src={params.row.img}
            className="cellImg"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Avatar
            alt="Trevor Henderson"
            src={params.row.img}
            className="cellImg"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </AvatarGroup>
      );
    },
  },
  {
    field: "categories",
    headerName: "Categories",
    width: 230,
    renderCell: (param) => {
      return (
        <div>
          {param.row.categories.map((category) => (
            <Chip
              label={category}
              sx={{
                marginRight: "2px",
                backgroundColor: "#FFA500",
                color: "#FFFFFF",
              }}
            />
          ))}
        </div>
      );
    },
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 230,
    renderCell: (param) => {
      return (
        <div>
          {param.row.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              color="primary"
              sx={{ marginRight: "2px" }}
            />
          ))}
        </div>
      );
    },
  },
  {
    field: "nextMeetings",
    headerName: "Next Meetings",
    width: 230,
    renderCell: (param) => {
      return (
        <div>
          <Chip label={param.row.nextMeetings} color="success" />
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    brand: "Snow",
    description: "Developed a personalized fit for the industry",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    members: "",
    categories: ["Authentication"],
    tags: ["#Digitalmarketing", "#Oracle"],
    nextMeetings: "Tommorow",
  },
  {
    id: 2,
    brand: "Jamie Lannister",
    description: "Developed a personalized fit for the industry",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    members: "",
    categories: ["E-commerce", "B2B"],
    tags: ["#Digitalmarketing", "#aniket"],
    nextMeetings: "Next Month",
  },
  {
    id: 3,
    brand: "Lannister",
    description: "Developed a personalized fit for the industry",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    members: "",
    categories: ["SAAS", "Macffe"],
    tags: ["#Cloud", "#Oracle"],
    nextMeetings: "in 1 hour",
  },
  {
    id: 4,
    brand: "Stark",
    description: "Developed a personalized fit for the industry",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    members: "",
    categories: ["Merketplace"],
    tags: ["#Digitalmarketing", "#Oracle"],
    nextMeetings: "in 30 minutes",
  },
  {
    id: 5,
    brand: "Targaryen",
    description: "Developed a personalized fit for the industry",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    members: "",
    categories: ["B2B", "B2C"],
    tags: ["#Digitalmarketing", "#SASS"],
    nextMeetings: "No Contact",
  },
  {
    id: 6,
    brand: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Developed a personalized fit for the industry",
    members: "",
    categories: ["Technology", "SAAS"],
    tags: ["#Cloud", "#SASS"],
    nextMeetings: "in 2 hours",
  },
  {
    id: 7,
    brand: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Developed a personalized fit for the industry",
    members: "",
    categories: ["Finance", "Authentication"],
    tags: ["#Digitalmarketing", "#SASS"],
    nextMeetings: "No Contact",
  },
  {
    id: 8,
    brand: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Developed a personalized fit for the industry",
    members: "",
    categories: ["Transportation"],
    tags: ["#SASS", "#B2C", "#B2B"],
    nextMeetings: "Next Month",
  },
  {
    id: 9,
    brand: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Developed a personalized fit for the industry",
    members: "",
    categories: ["Publishing", "B2C"],
    tags: ["#Digitalmarketing", "#SASS"],
    nextMeetings: "in 30 minutes",
  },
  {
    id: 10,
    brand: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    description: "Developed a personalized fit for the industry",
    members: "",
    categories: ["Web Services"],
    tags: ["#Cloud"],
    nextMeetings: "No Contact",
  },
];
