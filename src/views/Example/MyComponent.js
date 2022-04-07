import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';



class MyComponent extends React.Component {


    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'bacJob1', title: 'Dev', salary: '100' },
            { id: 'bacJob2', title: 'Test', salary: '400' },
            { id: 'bacJob3', title: 'InfoSec', salary: '500' },
        ],
    };

    addNewJob = (job) => {
        console.log('check job', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job],
        })
    }

    deleteJob = (job) => {

        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })


    }

    render() {
        console.log('hey hey hey');
        return (
            <>
                {console.log(this.state.arrJobs)}
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    name={this.state.firstName}
                    age={"22"}
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;