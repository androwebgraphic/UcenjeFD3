import {
	Button,
	Col,
	Form,
	FormCheck,
	FormControl,
	Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import SmjerService from "../../services/smjerovi/SmjerService";

export default function SmjerNovi() {

  const navigate = useNavigate()

  async function dodaj(smjer) {

    await SmjerService.dodaj(smjer)
      
      .then(() => {
      
          navigate(RouteNames.SMJEROVI)
    }
    )
    

  } 

  function odradiSubmit(e) {// e je event

    e.preventDefault()

    const podatci = new FormData(e.target)
    dodaj({

       sifra: 1,
        naziv: podatci.get('naziv'),
        trajanje:parseInt(podatci.get('trajanje')),
        cijena: parseFloat(podatci.get('cijena')),
        datumPokretanja: new Date(podatci.get('datumPokretanja')).toISOString(),
        aktivan: podatci.get('aktivan') === 'on',//, na zadnji može doći zarez ali i ne mora


    })
    

  }

	return (
		<>
			<h3>Unos novog smjera</h3>

      <Form onSubmit={odradiSubmit}>
        
				<Form.Group controlId="naziv">
					<Form.Label>Naziv</Form.Label>
					<Form.Control type="text" name="naziv" required />
				</Form.Group>

				<Form.Group controlId="trajanje">
					<Form.Label>Trajanje</Form.Label>
					<Form.Control type="number" name="trajanje" step={1} />
				</Form.Group>

				<Form.Group controlId="cijena">
					<Form.Label>Cijena</Form.Label>
					<Form.Control type="number" name="cijena" step={0.01} />
				</Form.Group>

				<Form.Group controlId="datumPokretanja">
					<Form.Label>Datum pokretanaj</Form.Label>
					<Form.Control type="date" name="datumPokretanja" />
				</Form.Group>

				<Form.Group controlId="aktivan">
					<FormCheck label="Aktivan" name="aktivan" />
				</Form.Group>

				<hr />
				<Row>
					<Col>
						<Link to={RouteNames.SMJEROVI}>Odustani</Link>
						<Col>
							<Button type="submit">Dodaj novi smjer</Button>
						</Col>
					</Col>
				</Row>
			</Form>
		</>
	);
}
