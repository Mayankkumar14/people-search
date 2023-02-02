import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { NO_DATA_FOUND } from "../../utils/constants";

const NoDataFound = () => (
  <Box className={"no-data-box-custom"}>
    <Card className={"no-data-card-custom"}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {NO_DATA_FOUND}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default NoDataFound;
