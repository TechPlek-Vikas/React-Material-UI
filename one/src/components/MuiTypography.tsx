import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      {/* When we don't pass any then use p tag with body1 => varaint default = body1 */}
      <Typography>Default</Typography>

      {/* h1-h6 */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      {/* gutterBottom by default = false */}
      <Typography variant="h4" gutterBottom>
        h4 Heading with gutter
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      {/* both are h6 element */}
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      {/* p tag */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam nihil magnam, facere aperiam quis corporis. Iusto accusantium
        est voluptatem sequi, doloribus nam molestias esse maiores ad cumque
        repellat odio!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
        voluptatem expedita facere, a esse neque consectetur natus magni
        perferendis iste distinctio dolorum, aperiam, eveniet atque beatae?
        Pariatur saepe numquam blanditiis.
      </Typography>

      {/* maintain semantic elemnent */}
      <Typography variant="h4" component="h1">
        maintain semantic element
      </Typography>
    </div>
  );
};

export default MuiTypography;
