import Chatbox from "@/components/chatbox"
import IUser from "@/models/user"


// Interface MainChatProp
interface MainChatProp {
    user: IUser;
    bot: IUser;
    user_messenger: string[];
    bot_messenger: string[];
}

// Function MainChat
function MainChat() {
    // Tạo đối tượng dataMainChat có kiểu MainChatProp và gán giá trị cho các thuộc tính của nó
    const dataMainChat: MainChatProp = {
        user: { user_id: 1, username: "nam", password: "134", status: true, img: "https://www.bing.com/images/search?view=detailV2&ccid=BIZbOHp%2b&id=2C5327167B51944E609511E7B96C2EB7E8F96599&thid=OIP.BIZbOHp-Enot1H-jcLKYJgHaFX&mediaurl=https%3a%2f%2fscr.vn%2fwp-content%2fuploads%2f2020%2f08%2fThu-d%e1%bb%8bu-d%c3%a0ng-l%c3%a1-r%e1%bb%a5ng-v%c3%a0ng.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.04865b387a7e127a2dd47fa370b29826%3frik%3dmWX56LcubLnnEQ%26pid%3dImgRaw%26r%3d0&exph=1067&expw=1474&q=%e1%ba%a3nh&simid=608011788903392443&FORM=IRPRST&ck=0E78E134B749FD04B8804F54F3E52B3B&selectedIndex=1&itb=0&ajaxhist=0&ajaxserp=0" },
        bot: { user_id: 2, username: "Bot", password: "134", status: true, img: "https://th.bing.com/th/id/OIP.fQAsK6RlR4fCvlyyq-8Y0wHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        user_messenger: ["1sefesfges", "2efwefef"],
        bot_messenger: ["bot1sdgesgsg", "bot2dsgeshehs"]
    };

    // Sử dụng dataMainChat để truyền vào props của Chatbox
    return (
        <>
           
            {/* Truyền props cho Chatbox */}
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
          
        </>
    );
}

export default MainChat;
