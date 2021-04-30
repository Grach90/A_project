import styles from './task.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faHourglassHalf, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Card, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { memo } from 'react';
const Task = ({
    task,
    handleDeleteTask,
    handleToggleCheckTask,
    isAnyTaskChecked,
    isChecked,
    setEditableTask,
    isLoadingForDelete,
    toggleStatus,
    ...props
}) => {
    const cls = [styles.task];
    if (isChecked)
        cls.push(styles.checked);

    if (isLoadingForDelete) {
        return <p>Loading ...</p>
    }

    return (
        <Card className={cls.join(' ')}>
            <input
                type="checkbox"
                onChange={() => handleToggleCheckTask(task._id)}
                checked={isChecked}
            />
            <Card.Body>
                <Card.Title style={{ color: 'white' }}>
                    <Link to={`/task/${task._id}`}> Title : {task.title}</Link>
                </Card.Title>
                <Card.Text style={{ color: 'white', marginBottom: "30px" }}>Description :{task.description}</Card.Text>
                <Card.Text style={{ color: 'white', marginBottom: "30px" }}>Date :{task.date.slice(0, 10)}</Card.Text>
                <Button
                    variant="danger"
                    onClick={() => handleDeleteTask(task._id)}
                    disabled={isAnyTaskChecked}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                <Button
                    variant="info"
                    className="ml-3"
                    disabled={isAnyTaskChecked}
                    onClick={() => setEditableTask(task)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant={task.status === "done" ? "success" : "warning"}
                    className="ml-3"
                    onClick={() => toggleStatus(task)}
                >
                    {task.status === "done" && <FontAwesomeIcon icon={faCheck} />}
                    {task.status === "active" && <FontAwesomeIcon icon={faHourglassHalf} />}

                </Button>
            </Card.Body>
        </Card>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    handleDeleteTask: PropTypes.func.isRequired,
    handleToggleCheckTask: PropTypes.func.isRequired,
    isAnyTaskChecked: PropTypes.bool.isRequired,
    isChecked: PropTypes.bool.isRequired

}
export default withRouter(memo(Task));