import { Box, Grid } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const PeopleSkeleton = () => {
  return (
    <Box className="custom-skeleton-container box-custom">
      <Grid container className="grid-container" spacing={2}>
        {Array(6)
          .fill()
          .map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className="custom-skeleton custom-border">
                <Skeleton variant="text" className="row" />
                <Skeleton variant="text" className="row" />
                <Skeleton variant="text" className="row" />
                <Skeleton variant="text" className="row" />
                <Skeleton variant="text" className="row" />
                <Skeleton variant="text" className="row" />
              </div>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PeopleSkeleton;
