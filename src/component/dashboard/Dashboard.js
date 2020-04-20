import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
// compose is used to two higher order components
import { compose } from 'redux';
import {Redirect } from 'react-router-dom';

class Dashboard extends Component{
    render(){
        const {projects,auth,notifications}=this.props
        if(!auth.uid)
        {   return <Redirect to="/signup" />
        }
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col m6 s12">
                    <ProjectList projects={projects}/>
                    </div> 
                    <div className="col s12 m5 offset-m1">
                    <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{

    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects',limit:3,orderBy:['createdAt','desc'] },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        { collection:'notifications',limit:3 , orderBy:['time','desc']}       //gonna take array and connect to the collection
    ])
)(Dashboard);