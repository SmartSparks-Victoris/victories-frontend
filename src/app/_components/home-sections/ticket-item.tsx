import CustomLink from '../navigation/custom-link';
import React from 'react';

const TicketItem = ({ type, text, number, percentage, href }) => {
  let svg;
  let color;

  if (type === 'inProgress') {
    svg = (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.5 3.43788C12.5 3.28996 12.5 3.21496 12.5479 3.16913C12.5948 3.12329 12.6677 3.12538 12.8125 3.13059C14.8474 3.19825 16.8049 3.92652 18.3892 5.20531C19.9735 6.4841 21.0985 8.24389 21.594 10.2187C22.0896 12.1935 21.9287 14.2759 21.1359 16.1512C20.343 18.0265 18.9612 19.5927 17.1994 20.6131C15.4375 21.6334 13.3914 22.0525 11.3702 21.807C9.34908 21.5614 7.46281 20.6646 5.99655 19.252C4.53028 17.8394 3.56373 15.9879 3.24299 13.9773C2.92225 11.9667 3.26476 9.90634 4.21875 8.10767C4.28542 7.97954 4.31979 7.916 4.38333 7.89725C4.44687 7.8785 4.51146 7.916 4.63958 7.98996L10.4177 11.3056C10.5406 11.3764 10.6021 11.4108 10.6219 11.466C10.6406 11.5212 10.6115 11.5952 10.5542 11.7431C10.3971 12.1464 10.3692 12.5886 10.4744 13.0084C10.5795 13.4283 10.8125 13.8051 11.1411 14.0868C11.4698 14.3685 11.8778 14.5411 12.3088 14.5808C12.7398 14.6205 13.1725 14.5253 13.547 14.3084C13.9216 14.0914 14.2195 13.7635 14.3995 13.3699C14.5796 12.9763 14.6329 12.5365 14.5522 12.1113C14.4714 11.6861 14.2605 11.2964 13.9487 10.9963C13.6368 10.6961 13.2395 10.5003 12.8115 10.4358C12.6542 10.4118 12.576 10.4004 12.5375 10.3566C12.5 10.3129 12.5 10.242 12.5 10.1004V3.43788Z"
          fill="#FFE9C7"
        />
        <path
          d="M9.01044 18.5438C8.93649 18.673 8.89899 18.7375 8.91669 18.8011C8.93649 18.8646 9.00003 18.899 9.12815 18.9657C10.0964 19.4707 11.1658 19.7519 12.2573 19.7883C13.3488 19.8247 14.4345 19.6154 15.4343 19.176C16.4341 18.7366 17.3224 18.0782 18.0337 17.2495C18.7449 16.4207 19.2609 15.4428 19.5436 14.3879C19.8262 13.333 19.8683 12.2281 19.6668 11.1548C19.4652 10.0815 19.0251 9.0671 18.379 8.18665C17.7328 7.30619 16.8972 6.58212 15.9337 6.06789C14.9703 5.55366 13.9036 5.26242 12.8125 5.21567C12.6688 5.20942 12.5959 5.20525 12.5479 5.25213C12.5 5.29796 12.5 5.37192 12.5 5.52088V10.1063C12.5 10.248 12.5 10.3188 12.5375 10.3625C12.5761 10.4073 12.6542 10.4188 12.8115 10.4428C13.1008 10.487 13.3774 10.5917 13.6235 10.7501C13.8696 10.9084 14.0796 11.1168 14.2398 11.3617C14.4 11.6066 14.5068 11.8825 14.5532 12.1714C14.5997 12.4604 14.5848 12.7558 14.5094 13.0386C14.4337 13.3215 14.2991 13.5852 14.1145 13.8124C13.9299 14.0397 13.6994 14.2255 13.438 14.3575C13.1767 14.4896 12.8904 14.565 12.5979 14.5787C12.3054 14.5925 12.0133 14.5444 11.7407 14.4375C11.5927 14.3792 11.5188 14.3511 11.4646 14.3698C11.4104 14.3886 11.374 14.45 11.3032 14.573L9.01044 18.5438Z"
          fill="#FFE9C7"
        />
      </svg>
    );
    color = 'var(--inProgressStroke)';
  } else if (type === 'open') {
    svg = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 2.03027V4.05027C17.39 4.59027 20.5 8.58027 19.96 12.9703C19.5 16.6103 16.64 19.5003 13 19.9303V21.9303C18.5 21.3803 22.5 16.5003 21.95 11.0003C21.5 6.25027 17.73 2.50027 13 2.03027ZM11 2.06027C9.04999 2.25027 7.18999 3.00027 5.66999 4.26027L7.09999 5.74027C8.21999 4.84027 9.56999 4.26027 11 4.06027V2.06027ZM4.25999 5.67027C3.01043 7.18809 2.24108 9.04358 2.04999 11.0003H4.04999C4.23999 9.58027 4.79999 8.23027 5.68999 7.10027L4.25999 5.67027ZM2.05999 13.0003C2.25999 14.9603 3.02999 16.8103 4.26999 18.3303L5.68999 16.9003C4.80683 15.7699 4.24385 14.4229 4.05999 13.0003H2.05999ZM7.09999 18.3703L5.66999 19.7403C7.18496 21.0027 9.03935 21.789 11 22.0003V20.0003C9.57736 19.8164 8.23034 19.2534 7.09999 18.3703ZM14.59 8.00027L12 10.5903L9.40999 8.00027L7.99999 9.41027L10.59 12.0003L7.99999 14.5903L9.40999 16.0003L12 13.4103L14.59 16.0003L16 14.5903L13.41 12.0003L16 9.41027L14.59 8.00027Z"
          fill="#FFD6DD"
        />
      </svg>
    );
    color = 'var(--openStroke)';
  } else if (type === 'completed') {
    svg = (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_751_2032)">
          <path
            d="M10 0C10.918 0 11.8034 0.117188 12.6562 0.351562C13.5091 0.585938 14.3034 0.924479 15.0391 1.36719C15.7747 1.8099 16.4486 2.33073 17.0605 2.92969C17.6725 3.52865 18.1966 4.20247 18.6328 4.95117C19.069 5.69987 19.4043 6.4974 19.6387 7.34375C19.873 8.1901 19.9935 9.07552 20 10C20 10.918 19.8828 11.8034 19.6484 12.6562C19.4141 13.5091 19.0755 14.3034 18.6328 15.0391C18.1901 15.7747 17.6693 16.4486 17.0703 17.0605C16.4714 17.6725 15.7975 18.1966 15.0488 18.6328C14.3001 19.069 13.5026 19.4043 12.6562 19.6387C11.8099 19.873 10.9245 19.9935 10 20C9.08203 20 8.19661 19.8828 7.34375 19.6484C6.49089 19.4141 5.69661 19.0755 4.96094 18.6328C4.22526 18.1901 3.55143 17.6693 2.93945 17.0703C2.32747 16.4714 1.80339 15.7975 1.36719 15.0488C0.93099 14.3001 0.595703 13.5026 0.361328 12.6562C0.126953 11.8099 0.00651042 10.9245 0 10C0 9.08203 0.117188 8.19661 0.351562 7.34375C0.585938 6.49089 0.924479 5.69661 1.36719 4.96094C1.8099 4.22526 2.33073 3.55143 2.92969 2.93945C3.52865 2.32747 4.20247 1.80339 4.95117 1.36719C5.69987 0.93099 6.4974 0.595703 7.34375 0.361328C8.1901 0.126953 9.07552 0.00651042 10 0ZM15.8887 6.68945L14.5605 5.36133L8.125 11.7969L5.43945 9.11133L4.11133 10.4395L8.125 14.4531L15.8887 6.68945Z"
            fill="#C6EDD0"
          />
        </g>
        <defs>
          <clipPath id="clip0_751_2032">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
    color = 'var(--completedStroke)';
  } else if (type === 'urgent') {
    svg = (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10ZM18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10ZM10 16C11.5913 16 13.1174 15.3679 14.2426 14.2426C15.3679 13.1174 16 11.5913 16 10C16 8.4087 15.3679 6.88258 14.2426 5.75736C13.1174 4.63214 11.5913 4 10 4C8.4087 4 6.88258 4.63214 5.75736 5.75736C4.63214 6.88258 4 8.4087 4 10C4 11.5913 4.63214 13.1174 5.75736 14.2426C6.88258 15.3679 8.4087 16 10 16Z"
          fill="#452033"
        />
      </svg>
    );
    color = 'var(--urgentStroke)';
  }

  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: `${color}`,
    height: '100%',
    borderRadius: '4px',
  };

  return (
    <CustomLink
      href={href}
      className="rounded-[16px] bg-[#745865] p-[24px] flex flex-col gap-[48px] text-textWhite w-[100%] text-start">
      <div className="flex flex-col gap-[8px]">
        {svg}
        <p className="text-[14px] text-roboto">{text}</p>
      </div>
      <div className="w-[100%] flex flex-col gap-[8px]">
        <div className="flex gap-[8px] ">
          <p>{number} Tickets</p>
          <div>|</div>
          <p>{percentage}%</p>
        </div>
        <div className="w-[100%] bg-textWhite h-[5px] rounded-full">
          <div style={barStyle}></div>
        </div>
      </div>
    </CustomLink>
  );
};

export default TicketItem;

