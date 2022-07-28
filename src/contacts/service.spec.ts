import ContactsService from './service';

describe('ContactsService', () => {
  // beforeEach(() => {});

  test('getAll', async () => {
    const results = await ContactsService.getAll();
    expect(results.length).toEqual(3);
  });
});
