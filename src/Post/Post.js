import React, { Component } from 'react';
import './Post.css';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid';
import moment from 'moment';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postobj: this.props.postobj,
        }
    }

    handlerShowReactions(index,param) {
        const {postobj} =  this.state;
        postobj[index].showReactions = param
        this.setState({ postobj });
    }

    emojiUpdate(index,val) {
        const {postobj} = this.state;
        postobj[index].emoji = val;
        postobj[index].showReactions = false;
        this.setState({
            postobj
        })
    }

    hideReaction(index){
        const { postobj } = this.state;
        postobj[index].showReactions = false;
        this.setState({
            postobj
        })
    }

    emoji(index,val) {
        const { postobj } = this.state;
        postobj[index].showReactions = false;
        if ( postobj[index].emoji !== "") {
            postobj[index].emoji = ""
            this.setState({
                postobj
            })
        }
        else {
            postobj[index].emoji = val; 
            this.setState({
                postobj
            })
        }
    }

    render() {
        const {postobj} = this.state;
        return (
            <div className="container">
                <div className="row" >
                    <div className="apni-class col-sm-12">
                        <br />
                        {
                            postobj.map((item, index) => {
                                return (
                                    <div key={index} onMouseEnter={this.handlerShowReactions.bind(this,index,false)}>
                                        <br />
                                        <div className="panel panel-white post panel-shadow">
                                            <div className="post-heading">
                                                <div className="float-left image">
                                                    <img src={item.avatar} className="img-circle avatar" alt="user profile" />
                                                </div>
                                                <div className="float-left meta">
                                                    <div className="title h5">
                                                        <a href="#"><b>{item.createdBy}</b></a>
                                                    </div>
                                                    <h6 className="text-muted time">{moment(item.createdAt).fromNow()}</h6>
                                                </div>
                                            </div>
                                            <div className="post-description">
                                                <p>{item.description}</p>
                                                <br />
                                                <div className="post-images">
                                                    <FbImageLibrary
                                                        images={item.images}
                                                        countFrom={5}
                                                    />
                                                    <br />
                                                </div>

                                                <div className="like-desc">{item.emoji !== "" ? <span><FacebookEmoji type={item.emoji} size="xxs" /> &nbsp; You </span> : ''}{item.likes} &amp; 20 others</div>

                                                <div className="stats">
                                                    {item.showReactions ? <div 
                                                                onMouseEnter={() => {
                                                                    this.handlerShowReactions(index,true);
                                                                }}
                                                             className="emoji-container">
                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'like')
                                                        }}>
                                                            <FacebookEmoji type="like" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'love')
                                                        }}>
                                                            <FacebookEmoji type="love" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'wow')
                                                        }}>
                                                            <FacebookEmoji type="wow" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'yay')
                                                        }}>
                                                            <FacebookEmoji type="yay" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'angry')
                                                        }}>
                                                            <FacebookEmoji type="angry" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'haha')
                                                        }}>
                                                            <FacebookEmoji type="haha" size="sm" />
                                                        </span>

                                                        <span onClick={() => {
                                                            this.emojiUpdate(index,'sad')
                                                        }}>
                                                            <FacebookEmoji type="sad" size="sm" />
                                                        </span>

                                                    </div> : ''}

                                                    <div className="stat-item">

                                                        <button

                                                            onClick={() => {
                                                                this.emoji(index,'like')
                                                            }}

                                                            onMouseEnter={() => {
                                                                this.handlerShowReactions(index,true);
                                                            }}

                                                            onTouchStart={() => {
                                                                this.handlerShowReactions(index,true);
                                                            }}

                                                            onBlurCapture={() => {
                                                                this.handlerShowReactions(index,false);
                                                            }}

                                                            onMouseLeave={this.hideReaction.bind(this,index)}

                                                            className="button">
                                                            {(item.emoji === "") ? <span><i className="fa fa-thumbs-o-up icon"></i> Like</span> :

                                                                (item.emoji === "like") ?
                                                                    <span style={{ color: '#548dff' }}>
                                                                        <FacebookEmoji type="like" size="xxs" /> &nbsp;Like
                                                    </span> :

                                                                    (item.emoji === "love") ?
                                                                        <span style={{ color: '#f77b8a' }}>
                                                                            <FacebookEmoji type="love" size="xxs" /> &nbsp;Love
                                                        </span> :

                                                                        (item.emoji === "wow") ?
                                                                            <span style={{ color: '#ffda6a' }}>
                                                                                <FacebookEmoji type="wow" size="xxs" /> &nbsp;Wow
                                                            </span> :

                                                                            (item.emoji === "yay") ?
                                                                                <span style={{ color: '#ffda6a' }}>
                                                                                    <FacebookEmoji type="yay" size="xxs" /> &nbsp;Yay
                                                                </span> :

                                                                                (item.emoji === "angry") ?
                                                                                    <span style={{ color: '#FFC107' }}>
                                                                                        <FacebookEmoji type="angry" size="xxs" /> &nbsp;Angry
                                                                    </span> :

                                                                                    (item.emoji === "haha") ?
                                                                                        <span style={{ color: '#ffda6a' }}>
                                                                                            <FacebookEmoji type="haha" size="xxs" /> &nbsp;Haha
                                                                        </span> :

                                                                                        (item.emoji === "sad") ?
                                                                                            <span style={{ color: '#ffda6a' }}>
                                                                                                <FacebookEmoji type="sad" size="xxs" /> &nbsp;Sad
                                                                            </span>

                                                                                            : item.emoji
                                                            }

                                                        </button>
                                                        <button  className="button"><i class="fa fa-comment-o" aria-hidden="true"></i> &nbsp;comment</button>

                                                        <button className="button"><i class="fa fa-share" aria-hidden="true"></i> &nbsp;Share</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                );
                            })
                        }
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}