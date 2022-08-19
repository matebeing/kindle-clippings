import styled, { css } from 'styled-components';
import Kindle from '../../assets/kindle.svg'; 

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10rem;
    gap: 2rem;
`;

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
`

const KindleMockup = styled.img`
    width: 20rem;
    margin-bottom: 3rem;
`

const Button = styled.button`
    color: white;
    background-color: #336CFF;
    border: none;
    border-radius: 0.3rem;
    padding: 1.2em;
    cursor: pointer;
    margin-top: 3rem;;
    
`

const Path = styled.div`
    display: inline-block;
    background-color: #1C1C1C;
    color: white;
    text-align: center;
    padding: 0.5em;
    border-radius: 0.5rem;
    font-size: 0.8rem;
`

function Home () {
    return (
        <div>
            <Container>
                <Wrapper>
                    <KindleMockup src={Kindle} alt="Kindle Mockup" />
                </Wrapper>
                <Wrapper>
                    <h1 style={{color: '#555555'}}>Connect your Amazon Kindle</h1>
                    <p style={{width: "400px"}}>You must use an usb cable to tranfer the data from your Amazon Kindle to your computer. Select the file in the path <Path>kindle/system/My Clippings.txt</Path></p>
                    <div>
                        <input type="file" accept=".txt" required/>
                        <Button>Upload</Button>
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Home;