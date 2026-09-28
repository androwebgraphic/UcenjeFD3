import { useEffect, useState } from "react"
import SmjerService from "../../services/smjerovi/SmjerService"
import { Table } from "react-bootstrap"
import { GrValidate } from "react-icons/gr"
import { FcApproval, FcDisapprove } from "react-icons/fc"
import { RouteNames } from "../../constants"
import { Link } from "react-router-dom"


export default function SmjerPregled(){

    const [smjerovi, setSmjerovi] = useState([])

    useEffect(()=>{
      
        ucitajSmjerove()
    },[])

    async function ucitajSmjerove(){
        await SmjerService.get().then((odgovor)=>{
            //console.table(odgovor.data)
            setSmjerovi(odgovor.data)
        })
    }


    return (
      <>
        
     <Link to={RouteNames.SMJEROVI_NOVI}>
        
          Dodavanje  novog smjera
        
        </Link>
     
        <Table hover striped bordered >
          <thead>

            <tr>
              <th>Naziv</th>
              <th>Trajanje</th>
              <th>Cijena</th>
              <th>Datum pokretanja</th>
              <th>Aktivan</th>
            </tr>
          </thead>
          <tbody>
            {smjerovi && smjerovi.map((smjer) => (
              
              <tr key={ smjer.sifra}>
                <td>{smjer.naziv}</td>
                <td>{smjer.trajanje}</td>
                <td>{smjer.cijena}</td>
                <td>{smjer.datumPokretanja}</td>
                {/* <td>{{ smjer.aktivan  ? 'DA' : 'NE'}</td> */}
                <td>
{/* 
                  <GrValidate
                    color={smjer.aktivan ? "green" : "red"}
                    size= {25}
                  
                  /> */}
                  {smjer.aktivan ? (
            
                    <FcApproval size= {25} />
                  ) : (
                      
                      <FcDisapprove size={25} />
            )}

                </td>
              </tr>
            ))}

          </tbody>

        </Table>
            {/* <pre>{JSON.stringify(smjerovi,null,2)}</pre> */}
        </>
    )
}