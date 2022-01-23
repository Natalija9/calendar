import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { Table } from 'semantic-ui-react';
import Day from '../components/Day';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
    };

    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (

    <Layout>

      <Table celled>
        <Table.Header>
          <Table.Row>

            <Table.HeaderCell>Monday</Table.HeaderCell>
            <Table.HeaderCell>Tuesday</Table.HeaderCell>
            <Table.HeaderCell>Wednesday</Table.HeaderCell>
            <Table.HeaderCell>Thursday</Table.HeaderCell>
            <Table.HeaderCell>Friday</Table.HeaderCell>
            <Table.HeaderCell>Saturday</Table.HeaderCell>
            <Table.HeaderCell>Sunday</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>

          <Table.Row>

            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day date={1}></Day>
            <Day date={2}></Day>

          </Table.Row>

          <Table.Row>

            <Day date={3}></Day>
            <Day date={4}></Day>
            <Day date={5}></Day>
            <Day date={6}></Day>
            <Day date={7}></Day>
            <Day date={8}></Day>
            <Day date={9}></Day>

          </Table.Row>

          <Table.Row>

            <Day date={10}></Day>
            <Day date={11}></Day>
            <Day date={12}></Day>
            <Day date={13}></Day>
            <Day date={14}></Day>
            <Day date={15}></Day>
            <Day date={16}></Day>

          </Table.Row>

          <Table.Row>

            <Day date={17}></Day>
            <Day date={18}></Day>
            <Day date={19}></Day>
            <Day date={20}></Day>
            <Day date={21}></Day>
            <Day date={22}></Day>
            <Day date={23}></Day>

          </Table.Row>

          <Table.Row>

            <Day date={24}></Day>
            <Day date={25}></Day>
            <Day date={26}></Day>
            <Day date={27}></Day>
            <Day date={28}></Day>
            <Day date={29}></Day>
            <Day date={30}></Day>

          </Table.Row>

          <Table.Row>

            <Day date={31}></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>
            <Day></Day>

          </Table.Row>

        </Table.Body>
      </Table>
    </Layout>


  );
}

export default MyApp;
