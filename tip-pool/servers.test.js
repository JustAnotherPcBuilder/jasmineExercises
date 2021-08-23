describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  //need to test serverTable server TD body
  it('should submit server info', function () {
    serverNameInput.value = 'Joe';

    submitServerInfo();


  });


  it('should update the server table and object should be working fine', function () {

    //setup logic for this test only
    allServers = { 'server1': { serverName: 'first' }, 'server2': { serverName: 'second' }, 'server3': { serverName: 'third' }, 'server4': { serverName: 'fourth' } };
    serverID = Object.keys(allServers).length;
    expect(serverID).toEqual(4);


    expect(allServers['server' + serverID].serverName).toEqual('fourth');
    expect(allServers['server2'].serverName).toEqual('second');

    updateServerTable();



  });


  afterEach(function () {
    // teardown logic
    allServers = {};
    serverID = 0;
    serverNameInput.value = '';
    //remove server table placed by testing logic
    document.querySelector('#serverTable tbody').innerHTML = '';
  });
});