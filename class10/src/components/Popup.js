export const Popup = ({ imageUrl, closePhoto }) => {
  //   console.log(closePhoto);
  return (
    <div id="popup">
      <button
        onClick={() => {
          closePhoto();
        }}
      >
        {
          // ova bi ni pokazalo x vnatre vo buttonot
          // ova se nekoj html codes
        }
        &times;
      </button>
      <div className="popup-container">
        <img src={imageUrl} alt="Big picture" />
      </div>
    </div>
  );
};

// Da napraime get request do apito i da se prikazat
// vo nekoja
// lista - id, name i status na karakterot
