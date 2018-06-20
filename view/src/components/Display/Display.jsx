import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";

const IMG_URL = "https://static01.nyt.com/"; //nyt host for images

const styles = {
  card: {
    marginBottom: "1em",
  },
  thumb: {
    height: 140,
    maxWidth: 210,
  },
  button: {
    margin: "0 4px",
  },
};

const Display = props => {
  const { articles } = props;
  return articles.map((article, i) => {
    return (
      <Slide
        key={article.headline.main + i}
        in={true}
        direction="right"
        style={{ transitionDelay: i * 50 }}
      >
        <Card style={styles.card}>
          <CardContent>
            <Grid container>
              <Grid item xs={2}>
                {article.pub_date && article.pub_date.slice(0, 10)}
              </Grid>
              <Grid item xs={8}>
                <Typography variant="title">{article.headline.main}</Typography>
                <Typography variant="body2" align="left">
                  {article.snippet}
                </Typography>
                <Button
                  variant="raised"
                  color="primary"
                  href={article.web_url}
                  target="_blank"
                  style={styles.button}
                >
                  Read
                </Button>
                <Button variant="raised" color="primary" style={styles.button}>
                  Save
                </Button>
              </Grid>
              <Grid item xs={2}>
                {article.multimedia.length > 0 && (
                  <CardMedia
                    image={IMG_URL + article.multimedia[0].url}
                    title="thumb"
                    style={styles.thumb}
                  />
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Slide>
    );
  });
};
export default Display;
