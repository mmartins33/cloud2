import './App.css'

// --- NOTA ---
// Você precisa adicionar essas imagens na sua pasta `src/assets`
// Ex: 'src/assets/aws.png', 'src/assets/azure.png', etc.

// Logos dos Provedores (Seção 4)
import awsLogo from './assets/aws.png'
import azureLogo from './assets/azure.png'
import gcpLogo from './assets/gcp.png'

// Logos dos Consumidores (Seção 5)
import netflixLogo from './assets/netflix.png'
import spotifyLogo from './assets/spotify.png'
import airbnbLogo from './assets/airbnb.png'


function App() {
  return (
    <div className="App">
      
      {/* ===== SESSÃO 1: BANNER ===== */}
      <section className="banner">
        <h1>Cloud Computing</h1>
      </section>

      {/* ===== SESSÃO 2: TIPOS DE CLOUD ===== */}
      <section className="cloud-types">
        <h2>Tipos de Nuvem</h2>
        <div className="types-container">
          <article>
            <h3>Cloud Pública</h3>
            <p>Recursos de computação (como servidores e armazenamento) pertencem e são operados por um provedor de serviços em nuvem terceirizado e entregues pela Internet. Ex: AWS, Google Cloud, Microsoft Azure.</p>
          </article>
          <article>
            <h3>Cloud Privada</h3>
            <p>Recursos de computação em nuvem usados exclusivamente por uma única empresa ou organização. Pode estar localizada fisicamente no data center local da organização ou ser hospedada por terceiros.</p>
          </article>
          <article>
            <h3>Cloud Híbrida</h3>
            <p>Uma combinação de nuvens públicas e privadas, unidas por tecnologia que permite que dados e aplicativos sejam compartilhados entre elas, oferecendo maior flexibilidade e opções de implantação.</p>
          </article>
        </div>
      </section>

      {/* ===== SESSÃO 3: MODELOS DE SERVIÇO (CARDS) ===== */}
      <section className="service-models">
        <h2>Modelos de Serviço (IaaS, PaaS, SaaS)</h2>
        <div className="cards-container">
          <div className="card">
            <h3>IaaS</h3>
            <h4>(Infrastructure as a Service)</h4>
            <p>Fornece infraestrutura de TI virtualizada (computação, armazenamento, rede) pela internet. É o "aluguel" do hardware. Você gerencia o sistema operacional, dados e aplicações.</p>
          </div>
          <div className="card">
            <h3>PaaS</h3>
            <h4>(Platform as a Service)</h4>
            <p>Fornece um ambiente para desenvolver, testar e gerenciar aplicações de software. O provedor gerencia a infraestrutura, e você foca apenas no desenvolvimento da sua aplicação.</p>
          </div>
          <div className="card">
            <h3>SaaS</h3>
            <h4>(Software as a Service)</h4>
            <p>Fornece software pronto para uso, acessível pela internet (baseado em assinatura). O provedor gerencia tudo. Ex: Gmail, Office 365, Salesforce.</p>
          </div>
        </div>
      </section>

      {/* ===== SESSÃO 4: PROVEDORES DE CLOUD ===== */}
      <section className="providers">
        <h2>Principais Provedores de Cloud</h2>
        <div className="logo-container">
          <img src={awsLogo} alt="Logo da AWS (Amazon Web Services)" />
          <img src={azureLogo} alt="Logo do Microsoft Azure" />
          <img src={gcpLogo} alt="Logo do Google Cloud Platform" />
        </div>
      </section>

      {/* ===== SESSÃO 5: EMPRESAS QUE USAM CLOUD ===== */}
      <section className="consumers">
        <h2>Empresas que usufruem da Cloud</h2>
        <div className="logo-container">
          <img src={netflixLogo} alt="Logo da Netflix" />
          <img src={spotifyLogo} alt="Logo do Spotify" />
          <img src={airbnbLogo} alt="Logo do Airbnb" />
        </div>
      </section>

    </div>
  )
}

export default App