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
        user: { user_id: 1, username: "nam", password: "134", status: true, img: "https://th.bing.com/th/id/OIP.Iy0tmJanZeN5ceMP5uToLQAAAA?&w=160&h=240&c=7&dpr=1.3&pid=ImgDet" },
        bot: { user_id: 2, username: "Bot", password: "134", status: true, img: "https://th.bing.com/th/id/OIP.fQAsK6RlR4fCvlyyq-8Y0wHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        user_messenger: ["1sefesfges", "2efwefef"],
        bot_messenger: ["bot1sdgesgsg", "bot2dsgeshehs"]
    };

    // Sử dụng dataMainChat để truyền vào props của Chatbox
    return (
        <>
           
            {/* Truyền props cho Chatbox */}
            <Chatbox owner={dataMainChat.bot} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />
            <Chatbox owner={dataMainChat.user} messenger={dataMainChat.user_messenger[1]} />

        </>
    );
}

export default MainChat;
