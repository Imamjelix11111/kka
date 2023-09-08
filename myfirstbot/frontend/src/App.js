import './App.css';
let tg = window.Telegram.WebApp;

tg.expand();
 
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";
tg.MainButton.setText("Order!");
tg.MainButton.show();

function App() {
  return (
     <div className="kintil">
       <h1 className="h1">VCS ORDER</h1> 
     </div>
  );
}

export default App;
