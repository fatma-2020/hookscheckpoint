import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const MovieRating = ({ rate }) => {
  const [value, setValue] = React.useState(rate);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="read-only"
        value={value}
        readOnly
        style={{ marginLeft: 14 }}
      />
    </Box>
  );
};
export default MovieRating;
