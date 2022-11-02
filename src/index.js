import { Container } from '@chakra-ui/react'

const IndexPage = () => (
    <Container maxW={"container.xl"} p={0}>
        <Flex>
            <Box>Header</Box>
        </Flex>
        <Flex>
            <Box>Body</Box>
        </Flex>
        <Flex>
            <Box>Footer</Box>
        </Flex>
    </Container>
);

export default IndexPage;