import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './useStyles';
import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

function Task({ onClick, task }) {
  const styles = useStyles();

  const handleClick = () => onClick(task);
  const action = (
    <IconButton onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );

  return (
    <Card className={styles.root}>
      <CardHeader action={action} title={task.name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

Task.propTypes = {
  task: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Task;
