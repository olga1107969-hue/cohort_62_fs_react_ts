import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { RANDOM_JOKE_URL } from "./data";
import { PageWrapper, Text, JokeContainer, Card, ErrorText } from "./styles";

function Homework_10() {
  const [joke, setJoke] = useState<undefined | string>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const getJoke = async () => {
    setJoke(undefined);
    setError(undefined);
    setIsDisabled(true);

    try {
      const response = await axios.get(RANDOM_JOKE_URL);
      const data = response.data;
      // тут пишем логику, когда нам пришла шутка(статус промиса fullfiled)
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error: any) {
      // тут пишем логику, когда нам пришла ошибка(статус промиса rejected)
      setError(error.message);
    } finally {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <JokeContainer>
          {!!joke && <Text>{joke}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </JokeContainer>
        <Button isDisabled={isDisabled} name="Get new joke" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_10;