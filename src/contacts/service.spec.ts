import ContactsService from './service';

describe('ContactsService', () => {
  afterAll(async () => {
    await ContactsService.close();
  });

  test('getAll', async () => {
    const results = await ContactsService.getAll();
    expect(results.length).toEqual(3);
  });
});
