import React from 'react'
import PropTypes from 'prop-types';
import { graphql, StaticQuery, Link as GatsbyLink } from 'gatsby'
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  }
};

function List(props) {
  const { classes } = props;

  return (
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark (
          sort: {fields: [frontmatter___date], order: DESC},
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                slug
              }
              timeToRead
              excerpt
            }
          }
        }
      }
    `}
      render={data => (
        <section>
          <Typography gutterBottom align="center" variant="h4" component="h2">Latest Posts</Typography>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    <Link component={GatsbyLink} variant="headline" to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
                  </Typography>
                  <Typography gutterBottom variant="button">
                    {node.frontmatter.date} - {node.timeToRead} min read
                    </Typography>
                  <Typography component="p">
                    {node.excerpt}
                  </Typography>
                </CardContent>
              </Card>
              <br />
            </div>
          ))}
        </section>
      )}
    />
  )
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);