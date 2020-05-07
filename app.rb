require 'sinatra'
require 'bitx'

get '/' do
  @btc = BitX.ticker('XBTZAR')[:ask]
  @eth = BitX.ticker('ETHZAR')[:ask] 
  @xrp = BitX.ticker('XRPZAR')[:ask]
  erb :index
end