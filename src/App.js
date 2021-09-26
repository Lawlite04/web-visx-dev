import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavbarAc from './components/NavbarAc'
import HomeAc from './views/HomeAc';
import LayananAc from './views/LayananAc';
import CompanyAc from './views/CompanyAc';
import FooterAc from './components/FooterAc';
import DetailPaketLayananAc from './views/DetailPaketLayanan';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarAc />
        <Switch>
          <Route path="/" exact component={HomeAc} />
          <Route path="/layanan" exact component={LayananAc} />
          <Route path="/detail-layanan" exact component={DetailPaketLayananAc} />
          <Route path="/company" exact component={CompanyAc} />
        </Switch>
        <FooterAc/>
      </div>
    </BrowserRouter>
  );
}

export default App;
