require 'sinatra'
require 'bitx'

class App < Sinatra::Base
  get '/' do
    @btc = BitX.ticker('XBTZAR')[:ask]
    @eth = BitX.ticker('ETHZAR')[:ask] 
    @xrp = BitX.ticker('XRPZAR')[:ask]
    erb :index
  end
end