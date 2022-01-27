import styled from 'styled-components';

function Title({ onHandleExpand, logData, index }) {
  return (
    <TitleContainer onClick={onHandleExpand}>
      <div className='date'>
        <div>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.5 4H19.3334V5.33333H21.3334V20H2.6667V5.33333H4.6667V4H2.50003C2.34419 4.0026 2.19038 4.03588 2.04741 4.09794C1.90443 4.15999 1.77508 4.24961 1.66674 4.36166C1.5584 4.47371 1.47319 4.60601 1.41599 4.751C1.35879 4.89599 1.33071 5.05083 1.33336 5.20667V20.1267C1.33071 20.2825 1.35879 20.4373 1.41599 20.5823C1.47319 20.7273 1.5584 20.8596 1.66674 20.9717C1.77508 21.0837 1.90443 21.1733 2.04741 21.2354C2.19038 21.2974 2.34419 21.3307 2.50003 21.3333H21.5C21.6559 21.3307 21.8097 21.2974 21.9526 21.2354C22.0956 21.1733 22.225 21.0837 22.3333 20.9717C22.4417 20.8596 22.5269 20.7273 22.5841 20.5823C22.6413 20.4373 22.6693 20.2825 22.6667 20.1267V5.20667C22.6693 5.05083 22.6413 4.89599 22.5841 4.751C22.5269 4.60601 22.4417 4.47371 22.3333 4.36166C22.225 4.24961 22.0956 4.15999 21.9526 4.09794C21.8097 4.03588 21.6559 4.0026 21.5 4V4Z'
              fill='black'
            />
            <path
              d='M5.33331 9.33334H6.66665V10.6667H5.33331V9.33334Z'
              fill='black'
            />
            <path
              d='M9.33331 9.33334H10.6666V10.6667H9.33331V9.33334Z'
              fill='black'
            />
            <path
              d='M13.3333 9.33334H14.6666V10.6667H13.3333V9.33334Z'
              fill='black'
            />
            <path
              d='M17.3333 9.33334H18.6666V10.6667H17.3333V9.33334Z'
              fill='black'
            />
            <path
              d='M5.33331 12.6667H6.66665V14H5.33331V12.6667Z'
              fill='black'
            />
            <path
              d='M9.33331 12.6667H10.6666V14H9.33331V12.6667Z'
              fill='black'
            />
            <path
              d='M13.3333 12.6667H14.6666V14H13.3333V12.6667Z'
              fill='black'
            />
            <path
              d='M17.3333 12.6667H18.6666V14H17.3333V12.6667Z'
              fill='black'
            />
            <path
              d='M5.33331 16H6.66665V17.3333H5.33331V16Z'
              fill='black'
            />
            <path
              d='M9.33331 16H10.6666V17.3333H9.33331V16Z'
              fill='black'
            />
            <path
              d='M13.3333 16H14.6666V17.3333H13.3333V16Z'
              fill='black'
            />
            <path
              d='M17.3333 16H18.6666V17.3333H17.3333V16Z'
              fill='black'
            />
            <path
              d='M6.66667 6.66668C6.84348 6.66668 7.01305 6.59644 7.13807 6.47141C7.2631 6.34639 7.33333 6.17682 7.33333 6.00001V2.00001C7.33333 1.8232 7.2631 1.65363 7.13807 1.52861C7.01305 1.40358 6.84348 1.33334 6.66667 1.33334C6.48986 1.33334 6.32029 1.40358 6.19526 1.52861C6.07024 1.65363 6 1.8232 6 2.00001V6.00001C6 6.17682 6.07024 6.34639 6.19526 6.47141C6.32029 6.59644 6.48986 6.66668 6.66667 6.66668Z'
              fill='black'
            />
            <path
              d='M17.3334 6.66668C17.5102 6.66668 17.6797 6.59644 17.8048 6.47141C17.9298 6.34639 18 6.17682 18 6.00001V2.00001C18 1.8232 17.9298 1.65363 17.8048 1.52861C17.6797 1.40358 17.5102 1.33334 17.3334 1.33334C17.1565 1.33334 16.987 1.40358 16.8619 1.52861C16.7369 1.65363 16.6667 1.8232 16.6667 2.00001V6.00001C16.6667 6.17682 16.7369 6.34639 16.8619 6.47141C16.987 6.59644 17.1565 6.66668 17.3334 6.66668Z'
              fill='black'
            />
            <path
              d='M8.66669 4H15.3334V5.33333H8.66669V4Z'
              fill='black'
            />
          </svg>

          {` ${logData.date}`}
        </div>
        <div>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.7272 4.47656H11.2272V12.8255L16.6466 15.4012L17.2905 14.0464L12.7272 11.8776V4.47656Z'
              fill='black'
            />
            <path
              d='M12 0.75C5.78681 0.75 0.75 5.78681 0.75 12C0.75 18.2132 5.78681 23.25 12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.78681 18.2132 0.75 12 0.75ZM12 21.75C6.61523 21.75 2.25 17.3848 2.25 12C2.25 6.61523 6.61523 2.25 12 2.25C17.3848 2.25 21.75 6.61523 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75Z'
              fill='black'
            />
          </svg>

          {` ${logData.time}`}
        </div>
      </div>
      <div className='duration'>
        <div>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9.75 1.5C9.55109 1.5 9.36032 1.57902 9.21967 1.71967C9.07902 1.86032 9 2.05109 9 2.25C9 2.44891 9.07902 2.63968 9.21967 2.78033C9.36032 2.92098 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 2.92098 14.7803 2.78033C14.921 2.63968 15 2.44891 15 2.25C15 2.05109 14.921 1.86032 14.7803 1.71967C14.6397 1.57902 14.4489 1.5 14.25 1.5H9.75ZM12 8.25C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V9C11.25 8.80109 11.329 8.61032 11.4697 8.46967C11.6103 8.32902 11.8011 8.25 12 8.25V8.25ZM21 13.5C21 18.4702 16.9702 22.5 12 22.5C7.02975 22.5 3 18.4702 3 13.5C3 8.52975 7.02975 4.5 12 4.5C16.9702 4.5 21 8.52975 21 13.5ZM19.5 13.5C19.5 9.35775 16.1422 6 12 6C7.85775 6 4.5 9.35775 4.5 13.5C4.5 17.6422 7.85775 21 12 21C16.1422 21 19.5 17.6422 19.5 13.5ZM20.031 4.71975C19.9618 4.64812 19.8791 4.59098 19.7876 4.55167C19.696 4.51237 19.5976 4.49168 19.498 4.49081C19.3985 4.48995 19.2997 4.50892 19.2075 4.54663C19.1154 4.58434 19.0316 4.64003 18.9612 4.71045C18.8908 4.78087 18.8351 4.86461 18.7974 4.95678C18.7597 5.04896 18.7407 5.14772 18.7416 5.2473C18.7424 5.34689 18.7631 5.4453 18.8024 5.5368C18.8417 5.62831 18.8989 5.71106 18.9705 5.78025L20.4705 7.28025C20.5402 7.34988 20.6229 7.40511 20.7139 7.44278C20.8049 7.48044 20.9025 7.49981 21.001 7.49978C21.0995 7.49974 21.1971 7.4803 21.2881 7.44257C21.3791 7.40484 21.4617 7.34956 21.5314 7.27988C21.601 7.21019 21.6562 7.12748 21.6939 7.03645C21.7316 6.94542 21.7509 6.84787 21.7509 6.74936C21.7509 6.65085 21.7314 6.55331 21.6937 6.46231C21.656 6.37131 21.6007 6.28863 21.531 6.219L20.031 4.719V4.71975Z'
              fill='black'
            />
          </svg>

          {` ${logData.duration} min`}
        </div>
      </div>
      <div className='number'>
        <div>#</div>
        <div>{` ${index + 1}`}</div>
      </div>
    </TitleContainer>
  );
}

export default Title;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  border-bottom: 2px solid var(--primary-color);
  .date {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    flex-grow: 2;
  }

  .duration {
    display: flex;

    align-items: flex-end;
    flex-grow: 2;
  }

  .number {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-grow: 1;
    font-size: 1.5rem;
    div:last-child {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      color: red;
      font-size: 3rem;
    }
  }
`;
