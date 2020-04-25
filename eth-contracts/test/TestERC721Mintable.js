var BlackDevRealEstateToken = artifacts.require('BlackDevRealEstateToken');


contract('BlackDevRealEstateToken', accounts => {

    const account1 = accounts[0];
    const account2 = accounts[1];
    const account3 = accounts[2];
    const account4 = accounts[3];
    const tokens = [1, 2, 3];
    const failedTokens = [4];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await BlackDevRealEstateToken.new({from: account1});
            

            // TODO: mint multiple tokens
            await this.contract.mint(account1, tokens[0], {from:account1 });
            await this.contract.mint(account2, tokens[1], {from: account1 });
            await this.contract.mint(account3, tokens[2], {from: account1 });
        })

        it('should return total supply', async function () { 
            const expectedTotal = tokens.length;

            const TotalSupply = await this.contract.totalSupply();

            assert.equal(TotalSupply, expectedTotal, "Wrong total supply");
            
        });

        it('should get token balance with address', async function () { 
            const expectedBalance = 1;

            const account1Balance = await this.contract.balanceOf(account1, {from: account1});
            const account2Balance = await this.contract.balanceOf(account2, {from: account1});
            const account3Balance = await this.contract.balanceOf(account3, {from: account1});

            assert.equal(account1Balance, expectedBalance, "Balance not correct");
            assert.equal(account2Balance, expectedBalance, "Balance not correct");
            assert.equal(account3Balance, expectedBalance, "Balance not correct");
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri of token', async function () { 
            const tokenId = tokens[0];
            const baseURI = await this.contract.getBaseTokenURI();
            const expectedTokenURI = baseURI + tokenId;

            const tokenURI = await this.contract.tokenURI(tokenId);

            assert.equal(tokenURI, expectedTokenURI, "tokenURI not correct");
            
        })

        it('should transfer token from one owner to another', async function () { 
            const sender = account1;
            const receiver = account2;

            await this.contract.transferFrom(sender, receiver, tokens[0]);
            const newOwner = await this.contract.ownerOf(tokens[0]);

            assert.equal(newOwner, receiver, "Token transfer error");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await BlackDevRealEstateToken.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            var failed = false;
            try {
                await this.contract.mint(account4, failedTokens[0], {from: account4});
            } catch(err) {
                failed = true;
            }
            assert.equal(failed, true, "Minted token with wrong owner");
            
        })

        it('should return contract owner', async function () { 
            const owner = await this.contract.getOwner();

            assert.equal(owner, account1, "wrong owner");
            
        })

    });
})