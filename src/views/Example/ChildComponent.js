import React from 'react';




class ChildComponent extends React.Component {


    state = {
        showJob: false,
    };

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob,
        })
    }

    handleDeleteJob = (job) => {
        this.props.deleteJob(job);
    }

    render() {
        let { name, age, arrJobs } = this.props;
        let { showJob } = this.state;
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item, index) => {
                                if (+item.salary > 0) {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $ <></> <span onClick={() => this.handleDeleteJob(item)}>x</span>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;