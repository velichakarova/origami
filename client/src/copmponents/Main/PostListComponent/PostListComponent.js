/* eslint-disable no-useless-constructor */

import getAll from '../services/postService.js'
import Main from '../Main'
import {Component} from 'react';

class PostLisComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        getAll()
        .then(posts =>{
            this.setState({posts})
        })
    }


render(){
    return(
        <Main posts={this.state.posts} />
    )
}
}

export default PostLisComponent;