Implementing tags for messages sounds like a really useful feature. To help make sure I'd implemented it right, it would be great to know the use case, but I imagined it could be flagging topics by categories people might want to filter by, like demographics. So I thought about having pre-determined message tags, and an implementation similar to reactions, but only set by the sender.

I have taken a TDD approach; with writing failing tests and then implementing code to pass these tests. I have broken it down into flow/end-to-end (message.resolver.spec.ts) and data (message.data.spec.ts). So far I have looked at resolver tests, but havent added data tests.

The rough approach is:

1. Update chatMessage variable (in resolver.spec.ts) to contains tags

2. Run test to see if it fails
   Expect: to fail or get an error, seeing as tags dont exist

3. Fix tests by adding Tags to necessary places
   Schema designs (GraphQL, Database)

4. Write tests for adding messages with tags

5. Fix so tests pass.

- add single tag to a message
- add multiple tags to a message
  -> working down the resovler file and updating all the relevant functions.

6. Write tests for adding tags to an exisiting message

- add single tag to a message
- add multiple tags to a message **(Currently here. I noticed my tests passed! Even though I know my code only adds one tag, so will need to start adding into data.spec.ts to test this)**
- add duplicate tag

7. Fix to pass adding tags tests

- Need to go through my types when passing messagtags through Graphql->resolver->data pipelines. I get errors with type.

8. Write tests for removing tags to an exisiting message

- remove single tag from a message
- remove multiple tags from a message
- attempt to remove a tag which doesn't exist

9. Fix to pass removing tags test

10. Write tests for editing tags to an exisiting message

- edit single tag in a message
- edit multiple tags in a message
- attempt to edit a tag to an invalid value and ensure it handles correctly

11. Fix to pass edit tag tests

12. Write tests to add/remove/edit tags by someone other than sender.

- What problems you might encounter
  My biggest problems so far seem to be unfamilar tech stack. I have basic knowledge of Typescript only, Graphql, mongoDB, docker, and nestjs are all new.

Type errors!

I suspect searching will be a problem. Both in terms of implementing a clean friendly UI, displaying results in a meaningful way (to users). And problems with database getting big.

- How you would go about testing
  test data flow through pipeline, and getting correct data.

- What you might do differently
