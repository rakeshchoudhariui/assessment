import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";
import { TOPIC_QUERY } from "../queries";
import Topic from "../topic";

const apolloTopicMock = [
  {
    request: {
      query: TOPIC_QUERY,
      variables: {
        name: "react",
      },
    },
    result: {
      data: {
        topic: {
          name: "react",
          stargazerCount: 500,
          relatedTopics: [
            {
              name: "angular",
              stargazerCount: 400,
            },
          ],
        },
      },
    },
  },
];

describe("Topic component tests", () => {
  it("renders Topic card as expected", async () => {
    render(
      <MockedProvider mocks={apolloTopicMock}>
        <Topic name="react" />
      </MockedProvider>
    );
    await waitFor(async () => {
      expect(screen.getByTestId("card-title")).toHaveTextContent("react - 500");

      // validate related topics
      const relatedTopics = await screen.findAllByTestId("related-topic");
      relatedTopics.forEach((topic) => {
        expect(topic).toHaveTextContent("angular - 400");
      });
    });
  });

  it("Invokes selected event as expected", async () => {
    const selectionMockFn = jest.fn();
    render(
      <MockedProvider mocks={apolloTopicMock}>
        <Topic name="react" handleSelection={selectionMockFn} />
      </MockedProvider>
    );
    await waitFor(async () => {
      const relatedTopic = await screen.findByTestId("related-topic");
      fireEvent.click(relatedTopic);
      expect(selectionMockFn).toHaveBeenCalledTimes(1);
      expect(selectionMockFn).toHaveBeenCalledWith("angular");
    });
  });
});
