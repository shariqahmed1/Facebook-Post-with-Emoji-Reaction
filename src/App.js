import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sendobj: [
        {
          createdBy: "Shariq Ahmed",
          avatar:
            "http://elak.info/wp-content/uploads/2018/08/facebook-metalix-wallpapers-luxury-puter-icons-desktop-wallpaper-logo-fb-logo-icon-png-of-facebook-metalix-wallpapers.jpg",
          description:
            "Infinix is emerging brand and Hot 6 is next generation phone with Pro specifications that will bring loads of fun in your life. Design of the smartphone is unique where back side is decorated with dual camera lens on top side where Infinix Hot 6 Pro got fingerprint on the top middle accompanied with the company's name printed just below fingerprint scanner. In matter of its screen this phone is coming with Full Vision characteristics. ",
          images: [
            "http://sp.beritasatu.com/media/images/original/20180723121936234.jpg",
            "https://i1.wp.com/techweez.com/wp-content/uploads/2018/06/Infinix-Hot-S3-e1529512016787.jpg?fit=1000%2C521&ssl=1",
            "https://i1.wp.com/www.gizmolad.com/wp-content/uploads/2018/05/infinix-hot-6-phones.jpg?fit=879%2C495&ssl=1",
            "https://i.ytimg.com/vi/heRB-ZqiIM8/maxresdefault.jpg",
            "https://i1.wp.com/tech-ish.com/wp-content/uploads/2018/05/Infinix-Hot-6-PRO-Kenya.jpg?fit=1268%2C846&ssl=1",
            "https://telecomtalk.info/wp-content/uploads/2018/07/infinix-hot-6-pro-1.jpg",
          ],
          createdAt: "10/6/2018, 3:52:13 AM",
          likes: "Sohaib",
          emoji:"",
          showReactions:false,
        },
        {
          createdBy: "Infinix",
          avatar:
            "http://elak.info/wp-content/uploads/2018/08/facebook-metalix-wallpapers-luxury-puter-icons-desktop-wallpaper-logo-fb-logo-icon-png-of-facebook-metalix-wallpapers.jpg",
          description:
            "Infinix is emerging brand and Hot 6 is next generation phone with Pro specifications that will bring loads of fun in your life. Design of the smartphone is unique where back side is decorated with dual camera lens on top side where Infinix Hot 6 Pro got fingerprint on the top middle accompanied with the company's name printed just below fingerprint scanner. In matter of its screen this phone is coming with Full Vision characteristics. ",
          images: [
            "https://telecomtalk.info/wp-content/uploads/2018/07/infinix-hot-6-pro-1.jpg",
          ],
          createdAt: "8/6/2018, 3:52:13 AM",
          likes: "Furqan",
          emoji:"",
          showReactions:false,
        },
        {
          createdBy: "Noman Ahmed",
          avatar:
            "http://elak.info/wp-content/uploads/2018/08/facebook-metalix-wallpapers-luxury-puter-icons-desktop-wallpaper-logo-fb-logo-icon-png-of-facebook-metalix-wallpapers.jpg",
          description:
            "Infinix is emerging brand and Hot 6 is next generation phone with Pro specifications that will bring loads of fun in your life. Design of the smartphone is unique where back side is decorated with dual camera lens on top side where Infinix Hot 6 Pro got fingerprint on the top middle accompanied with the company's name printed just below fingerprint scanner. In matter of its screen this phone is coming with Full Vision characteristics. ",
          images: [
            "https://i1.wp.com/tech-ish.com/wp-content/uploads/2018/05/Infinix-Hot-6-PRO-Kenya.jpg?fit=1268%2C846&ssl=1",
            "https://telecomtalk.info/wp-content/uploads/2018/07/infinix-hot-6-pro-1.jpg",
            "http://sp.beritasatu.com/media/images/original/20180723121936234.jpg",
            "https://i1.wp.com/techweez.com/wp-content/uploads/2018/06/Infinix-Hot-S3-e1529512016787.jpg?fit=1000%2C521&ssl=1",
          ],
          createdAt: "10/8/2018, 1:52:13 AM",
          likes: "Ramish",
          emoji:"",
          showReactions:false,
        },
        {
          createdBy: "Ali Hamza",
          avatar:
            "http://elak.info/wp-content/uploads/2018/08/facebook-metalix-wallpapers-luxury-puter-icons-desktop-wallpaper-logo-fb-logo-icon-png-of-facebook-metalix-wallpapers.jpg",
          description:
            "Infinix is emerging brand and Hot 6 is next generation phone with Pro specifications that will bring loads of fun in your life. Design of the smartphone is unique where back side is decorated with dual camera lens on top side where Infinix Hot 6 Pro got fingerprint on the top middle accompanied with the company's name printed just below fingerprint scanner. In matter of its screen this phone is coming with Full Vision characteristics. ",
          images: [
            "https://i1.wp.com/tech-ish.com/wp-content/uploads/2018/05/Infinix-Hot-6-PRO-Kenya.jpg?fit=1268%2C846&ssl=1",
            "https://telecomtalk.info/wp-content/uploads/2018/07/infinix-hot-6-pro-1.jpg",
          ],
          createdAt: "10/8/2018, 3:52:13 AM",
          likes: "Huzaifa",
          emoji:"",
          showReactions:false,
        }
      ]
    };
  }


  render() {
    const { sendobj } = this.state;
    return (
      <div >
        <Post postobj={sendobj}/>
      </div>
    );
  }
}

export default App;
