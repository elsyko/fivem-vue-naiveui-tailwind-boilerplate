RegisterNetEvent('onResourceStart', function(resource)
    if GetCurrentResourceName() ~= resource then return end
    print("Syko Boilerplate loaded!")
end)