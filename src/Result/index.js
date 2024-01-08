import "./styles.css";

export const ShowResult = ({showAllObject}) => (

        <div className="showResult">
        {Number(showAllObject.ShowAmount).toFixed(2)} {showAllObject.showSelect1} = 
        <strong> {Number(showAllObject.ShowResult).toFixed(2)} {showAllObject.showSelect2}</strong>
        </div>  
);