import '../components/TabButton.css'


function TabButton({children,clickFunction, isActive}) {

      return <button onClick={clickFunction}  className = {isActive?
            'tab-button-active':'tab-button'}>{children}</button>;
}
 
export default TabButton;