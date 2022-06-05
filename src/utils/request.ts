import MonitorPNG from '../assets/monitor.png'
import PendrivePNG from '../assets/pendrive.png'
import TesouraPodaPNG from '../assets/tesouradepoda.png'
import HdExternoPNG from '../assets/hdexterno.png'

export const request = [
  {
    id: '1',
    title: 'Monitor de Video',
    icon: MonitorPNG,
    status: 'Disponivel',
    description: 'Monitor de Video 60hz 21°',
    politcs: '3 Dias devolução',
    quant: 0
  },
  {
    id: '2',
    title: 'Tesoura De poda',
    icon: TesouraPodaPNG,
    status: 'Disponivel',
    description: 'Tesoura de poda',
    politcs: '2 Dias devolução',
    quant: 10
  },
  {
    id: '3',
    title: 'Pendrive 16GB',
    icon: PendrivePNG,
    status: 'Disponivel',
    description: 'Pendrive 16GB',
    politcs: '8 Dias devolução',
    quant: 5
  },
  {
    id: '4',
    title: 'HD Externo',
    icon: HdExternoPNG,
    status: 'Entrar na fila',
    description: 'HD Externo 500 GB',
    politcs: '15 Dias devolução',
    quant: 15
  }
]